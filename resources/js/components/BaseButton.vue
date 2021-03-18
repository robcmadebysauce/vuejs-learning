<template>
    <VariantStyleProvider :variant="variant">
        <template #default="{ variantStyle }">
            <button :class="[
                $style.baseButton,
                variantStyle,
                $style[`size-${size}`]
            ]"
            v-bind="$attrs">
                <slot />
            </button>
        </template>
    </VariantStyleProvider>
</template>

<script>

import VariantStyleProvider from './VariantStyleProvider';

export default {
    name: 'BaseButton',
    components: {
        VariantStyleProvider,
    },
    props: {
        variant: {
            type: String,
            validators: value =>
                ['primary', 'secondary', 'warning', 'danger'].includes(value),
        },
        size: {
            type: String,
            validators: value =>
                ['sm', 'md', 'lg'].includes(value),
            default: "md",
        },
    }
}
</script>

<style module>
    .baseButton {
        text-transform: none;
        height: 52px;
        min-width: 92px;
        box-shadow: inset 0 -3px 0 0 var(--box-shadow-color)!important;
        line-height: 29px;
        letter-spacing: normal!important;
        border-radius: 28px;
        align-items: center;
        display: inline-flex;
        flex: 0 0 auto;
        font-weight: 500;
        justify-content: center;
        outline: 0;
        position: relative;
        text-decoration: none;
        text-indent: .0892857143em;
        transition-duration: .28s;
        transition-property: box-shadow,transform,opacity;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        white-space: nowrap;
    }

    .size-sm {
        height: 2rem;
        padding: 0 0.75rem;
    }

    .size-md {
        height: 2.5rem;
        padding: 0 1rem;
    }

    .size-lg {
        height: 3rem;
        padding: 0 1.5rem;
    }
</style>
