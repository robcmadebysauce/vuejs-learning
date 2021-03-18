<template>
    <div>
        <slot :variantStyle="[$style.baseVariant, $style[variant]]" />
    </div>
</template>

<script>
export default {
    name: "VariantStyleProvider",
    props: {
        variant: {
            type: String,
            validators: value =>
                ['primary', 'secondary', 'warning', 'danger'].includes(value),
        },
        /*size: {
            type: String,
            validators: value =>
                ['sm', 'md', 'lg'].includes(value),
            default: () => {
                return 'md';
            }
        }*/
    }
}
</script>

<style module>
    .baseVariant {
        color: var(--variant-text-color);
        background-color: var(--variant-bg-color);
        font-family: var(--button-font)!important;
    }

    .primary {
        --variant-text-color: var(--primary-text-color);
        --variant-bg-color: var(--primary-bg-color);
        --box-shadow-color: var(--primary-bg-color);
    }

    .secondary {
        --variant-text-color: var(--secondary-text-color);
        --variant-bg-color: var(--secondary-bg-color);
        --box-shadow-color: var(--secondary-bg-color);
    }

    .warning {
        --variant-text-color: var(--warning-text-color);
        --variant-bg-color: var(--warning-bg-color);
        --box-shadow-color: var(--warning-bg-color);
    }

    .danger {
        --variant-text-color: var(--danger-text-color);
        --variant-bg-color: var(--danger-bg-color);
        --box-shadow-color: var(--danger-bg-color);
    }
</style>
