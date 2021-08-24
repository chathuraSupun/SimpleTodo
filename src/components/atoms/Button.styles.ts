import { StyleSheet } from "react-native";
import {
    primaryTheme,
    colors,
    components,
    secondaryTheme,
    buttonVariants
} from "../../config";

const textStyles = StyleSheet.create({
    default: {
        textAlign: "center",
        fontSize: 16,
        lineHeight: 19,
        fontFamily: "Roboto",
        color: colors.sandybrown,
        fontWeight: "bold"
    },
    primary: {
        color: primaryTheme.buttonText
    },
    secondary: {
        color: secondaryTheme.buttonText
    },
    outlinewithIcon: {
        fontSize: 18,
        lineHeight: 20,
        color: colors.black
    },
    withIcon: {
        fontSize: 18,
        lineHeight: 20,
        color: colors.black
    },
    inactive: {
        color: colors.black
    }
});

const buttonStyles = StyleSheet.create({
    default: {
        backgroundColor: colors.navajowhite,
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    primary: {
        backgroundColor: primaryTheme.buttonBackground
    },
    secondary: {
        backgroundColor: secondaryTheme.buttonBackground,
        shadowColor: primaryTheme.buttonShadow,
        elevation: 3,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 50,
        shadowRadius: 5
    },
    onlyWithIcon: {
        backgroundColor: secondaryTheme.buttonBackground
    },
    outlinewithIcon: {
        flexDirection: "row",
        backgroundColor: colors.white,
        borderColor: colors.darkgray,
        borderWidth: 2,
        marginVertical: 15,
        justifyContent: "space-around"
    },
    withIcon: {
        backgroundColor: colors.ghostwhite,
        flexDirection: "row",
        marginVertical: 15,
        justifyContent: "space-around"
    },
    inactive: {
        backgroundColor: colors.ghostwhite
    },
    onlyIcon: {
        backgroundColor: "transparent",
        borderRadius: 0
    }
});

const imageStyles = StyleSheet.create({
    default: {
        height: 10,
        width: 10,
        resizeMode: "contain"
    },
    withIcon: {
        height: 25,
        width: 25
    },
    onlyIcon: {
        height: 20,
        width: 20
    },
    onlyWithIcon: {
        height: 18,
        width: 18
    },
    outlinewithIcon: {
        height: 25,
        width: 25
    }
});

const getCompVariant = (styleSet: any, variant: string | undefined) => {
    switch (variant) {
        case buttonVariants.Primary:
            return StyleSheet.flatten([styleSet.default, styleSet.primary]);
        case buttonVariants.Secondary:
            return StyleSheet.flatten([styleSet.default, styleSet.secondary]);
        case buttonVariants.OnlyIcon:
            return StyleSheet.flatten([styleSet.default, styleSet.onlyIcon]);
        case buttonVariants.OnlyWithIcon:
            return StyleSheet.flatten([
                styleSet.default,
                styleSet.onlyWithIcon
            ]);
        case buttonVariants.OutlinewithIcon:
            return StyleSheet.flatten([
                styleSet.default,
                styleSet.outlinewithIcon
            ]);
        case buttonVariants.WithIcon:
            return StyleSheet.flatten([styleSet.default, styleSet.withIcon]);
        case buttonVariants.InActive:
            return StyleSheet.flatten([styleSet.default, styleSet.inactive]);
        default:
            return styleSet.default;
    }
};

const getComponent = (component: string) => {
    switch (component) {
        case components.Text:
            return textStyles;
        case components.View:
            return buttonStyles;
        case components.Image:
            return imageStyles;
        default:
            return {};
    }
};

const getStyle = (component: string, variant: string | undefined) => {
    const compStyles = getComponent(component);
    return getCompVariant(compStyles, variant);
};

export default getStyle;
