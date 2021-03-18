<template>
    <div>

        <div :class="$style.container">
            <BaseButton variant="primary" size="sm"> Primary </BaseButton>
            <BaseButton variant="secondary"> Secondary </BaseButton>
            <BaseButton variant="warning" size="lg"> Warning </BaseButton>
            <BaseButton variant="danger" size="md"> Danger </BaseButton>
        </div>
        <div :class="$style.container">
            <BaseTag variant="primary"> Primary </BaseTag>
            <BaseTag variant="secondary"> Secondary </BaseTag>
            <BaseTag variant="warning"> Warning </BaseTag>
            <BaseTag variant="danger"> Danger </BaseTag>
        </div>
    </div>
</template>

<script>

import BaseButton from '../BaseButton';
import BaseTag from '../BaseTag';

export default {
    components: {
        BaseButton,
        BaseTag
    },
}
</script>

<style module>
    .container {
        width: 300px;
        margin: 2rem auto;
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
    }
</style>
