<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script setup>
import parts from '@/data/parts';
import { computed } from 'vue';

const props = defineProps(['partType', 'id']);
const part = computed(() => parts[props.partType].find((p) => p.id === +props.id));

</script>
