<script>
    import { T, useThrelte } from '@threlte/core';
    import { OrbitControls, Float } from '@threlte/extras';
    import * as THREE from 'three';

    // The target total weight of the barbell
    export let weight = 250;

    // Standard plate library — IPF/powerlifting color coding
    /** @type {Record<number, {radius: number, thickness: number, color: string, textColor: string}>} */
    const PLATE_SPECS = {
        45:  { radius: 0.8,  thickness: 0.15, color: "#DC2626", textColor: "#FFFFFF" }, // Red
        35:  { radius: 0.65, thickness: 0.12, color: "#EAB308", textColor: "#1a1a1a" }, // Yellow
        25:  { radius: 0.55, thickness: 0.10, color: "#16A34A", textColor: "#FFFFFF" }, // Green
        10:  { radius: 0.45, thickness: 0.10, color: "#F8FAFC", textColor: "#1a1a1a" }, // White
        5:   { radius: 0.35, thickness: 0.08, color: "#1E3A8A", textColor: "#FFFFFF" }, // Blue
        2.5: { radius: 0.25, thickness: 0.05, color: "#94A3B8", textColor: "#1a1a1a" }, // Silver
    };

    const BAR_WEIGHT = 45;
    const PLATE_GAP = 0.04;

    const { invalidate } = useThrelte();

    /** @type {THREE.Mesh[]} */
    let addedMeshes = [];

    /**
     * Create a canvas-textured label mesh
     * @param {number} w
     * @param {string} bgColor
     * @param {string} fgColor
     * @param {number} radius
     * @returns {THREE.Mesh}
     */
    function createLabelMesh(w, bgColor, fgColor, radius) {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            // Fill background with plate color
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, size, size);

            // Use thick stroke + fill for visible text on 3D texture
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Font size proportional to canvas — fills the rim nicely
            const fontSize = Math.round(size * 0.15);
            ctx.font = `700 ${fontSize}px sans-serif`;
            ctx.lineWidth = 4;
            ctx.strokeStyle = fgColor;
            ctx.fillStyle = fgColor;

            const label = `${w} LB`;

            // Top rim text (right-side up)
            ctx.strokeText(label, size / 2, size * 0.15);
            ctx.fillText(label, size / 2, size * 0.15);

            // Bottom rim text (rotated 180° so it reads from the other side)
            ctx.save();
            ctx.translate(size / 2, size * 0.85);
            ctx.rotate(Math.PI);
            ctx.strokeText(label, 0, 0);
            ctx.fillText(label, 0, 0);
            ctx.restore();
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.needsUpdate = true;

        const geo = new THREE.CircleGeometry(radius * 0.9, 64);
        const mat = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.5,
            metalness: 0.1,
            side: THREE.DoubleSide,
            color: 0xffffff,
        });
        return new THREE.Mesh(geo, mat);
    }

    // Calculate plates for ONE side of the barbell
    $: plates = (() => {
        let remaining = (weight - BAR_WEIGHT) / 2;
        let p = [];
        let offset = 1.0;
        const availableWeights = [45, 35, 25, 10, 5, 2.5];
        for (const w of availableWeights) {
            while (remaining >= w) {
                remaining -= w;
                const spec = PLATE_SPECS[w];
                offset += spec.thickness / 2;
                p.push({ weight: w, ...spec, offset });
                offset += spec.thickness / 2 + PLATE_GAP;
            }
        }
        return p;
    })();

    /**
     * Called by threlte's oncreate when the barbell group is created.
     * Receives the THREE.Group ref directly (threlte v8 API).
     * @param {THREE.Group} group
     */
    function onGroupCreated(group) {

        // Remove any previous labels
        for (const m of addedMeshes) {
            group.remove(m);
        }
        addedMeshes = [];

        for (const plate of plates) {
            const spec = PLATE_SPECS[plate.weight];

            // Right/positive side label
            const rightLabel = createLabelMesh(plate.weight, spec.color, spec.textColor, spec.radius);
            rightLabel.position.set(0, plate.offset + plate.thickness / 2 + 0.006, 0);
            rightLabel.rotation.set(-Math.PI / 2, 0, 0);
            group.add(rightLabel);
            addedMeshes.push(rightLabel);

            // Left/negative side label
            const leftLabel = createLabelMesh(plate.weight, spec.color, spec.textColor, spec.radius);
            leftLabel.position.set(0, -(plate.offset + plate.thickness / 2 + 0.006), 0);
            leftLabel.rotation.set(Math.PI / 2, 0, 0);
            group.add(leftLabel);
            addedMeshes.push(leftLabel);
        }

        invalidate();
    }

</script>

<T.PerspectiveCamera
    makeDefault
    position={[0, 2, 7]}
    fov={35}
>
    <OrbitControls 
        enableDamping
        dampingFactor={0.05}
        enableZoom={true}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        minDistance={3}
        maxDistance={5}
    />
</T.PerspectiveCamera>

<!-- Scene Lighting -->
<T.AmbientLight intensity={0.4} />
<T.DirectionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
<T.DirectionalLight position={[-5, -2, -5]} intensity={0.5} color="#ffffff" />

<!-- Main Barbell Object -->
<Float 
    speed={2} 
    rotationSpeed={0} 
    floatingRange={[-0.2, 0.2]}
>
    <T.Group rotation={[0, 0, Math.PI / 2]} oncreate={onGroupCreated}>
        
        <!-- =================== HANDLE =================== -->
        <T.Mesh receiveShadow castShadow>
            <T.CylinderGeometry args={[0.08, 0.08, 4, 32]} />
            <T.MeshStandardMaterial 
                color="#888888" 
                metalness={0.9} 
                roughness={0.4} 
            />
        </T.Mesh>

        <!-- =================== DYNAMIC PLATES =================== -->
        <!-- Right Side -->
        {#each plates as plate}
            <T.Mesh position={[0, plate.offset, 0]} receiveShadow castShadow>
                <T.CylinderGeometry args={[plate.radius, plate.radius, plate.thickness, 64]} />
                <T.MeshStandardMaterial color={plate.color} metalness={0.4} roughness={0.6} />
            </T.Mesh>
            <T.Mesh position={[0, plate.offset, 0]}>
                <T.TorusGeometry args={[plate.radius - 0.01, 0.005, 8, 64]} />
                <T.MeshStandardMaterial color="#444444" metalness={0.5} roughness={0.5} transparent opacity={0.15} />
            </T.Mesh>
        {/each}
        
        <!-- Right Collar -->
        {#if plates.length > 0}
            <T.Mesh position={[0, plates[plates.length - 1].offset + plates[plates.length - 1].thickness / 2 + 0.1, 0]} receiveShadow castShadow>
                <T.CylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
                <T.MeshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.3} />
            </T.Mesh>
        {/if}

        <!-- Left Side -->
        {#each plates as plate}
            <T.Mesh position={[0, -plate.offset, 0]} receiveShadow castShadow>
                <T.CylinderGeometry args={[plate.radius, plate.radius, plate.thickness, 64]} />
                <T.MeshStandardMaterial color={plate.color} metalness={0.4} roughness={0.6} />
            </T.Mesh>
            <T.Mesh position={[0, -plate.offset, 0]}>
                <T.TorusGeometry args={[plate.radius - 0.01, 0.005, 8, 64]} />
                <T.MeshStandardMaterial color="#444444" metalness={0.5} roughness={0.5} transparent opacity={0.15} />
            </T.Mesh>
        {/each}

        <!-- Left Collar -->
        {#if plates.length > 0}
            <T.Mesh position={[0, -(plates[plates.length - 1].offset + plates[plates.length - 1].thickness / 2 + 0.1), 0]} receiveShadow castShadow>
                <T.CylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
                <T.MeshStandardMaterial color="#c0c0c0" metalness={0.8} roughness={0.3} />
            </T.Mesh>
        {/if}

    </T.Group>
</Float>
