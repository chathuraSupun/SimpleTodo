export const components = {
    Text: "text",
    View: "view",
    Image: "image"
};

export const compVariants = {
    Primary: "primary",
    Default: "default",
    Secondary: "secondary"
};

export const buttonVariants = {
    ...compVariants,
    Outline: "outline",
    OutlinewithIcon: "outlineWithIcon",
    WithIcon: "withIcon",
    OnlyWithIcon: "onlyWithIcon",
    OnlyIcon: "onlyIcon",
    InActive: "inactive"
};

export default {
    components,
    compVariants,
    buttonVariants
};
