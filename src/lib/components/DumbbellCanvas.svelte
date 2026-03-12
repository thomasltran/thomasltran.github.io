<script>
    import { Canvas } from '@threlte/core';
    import Dumbbell3D from './Dumbbell3D.svelte';

    export let weight = 250;
</script>

<div class="w-full h-full relative cursor-grab active:cursor-grabbing">
    <!-- Glow effect behind the 3D model -->
    <div class="absolute inset-0 bg-surface-500/10 dark:bg-surface-400/10 rounded-full blur-3xl scale-75"></div>
    
    <div class="absolute inset-0 z-10">
        <Canvas>
            <Dumbbell3D {weight} />
        </Canvas>
    </div>
</div>
