import React, { FC } from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import styles from "./Button.styles";
import { components, images, buttonVariants } from "../../config";

type Props = {
    disabled?: boolean;
    onClick: () => void;
    children?: any;
    variant?: string;
    icon?: string;
};

const Button: FC<Props> = ({
    disabled = false,
    onClick = () => {},
    children,
    variant,
    icon
}) => {
    return (
        <TouchableOpacity
            onPress={() => onClick()}
            disabled={disabled}
            style={styles(components.View, variant)}
        >
            {image(variant, icon)}
            {label(variant, children)}
        </TouchableOpacity>
    );
};

const image = (variant: string | undefined, icon: string | undefined) => {
    let iconSource;
    switch (icon) {
        case "Facebook":
            iconSource = images.Facebook;
            break;
        case "Google":
            iconSource = images.Google;
            break;
        case "Email":
            iconSource = images.Email;
            break;
        case "Plus":
            iconSource = images.Plus;
            break;
        case "Home":
            iconSource = images.Home;
            break;
        case "Settings":
            iconSource = images.Settings;
            break;
        default:
            iconSource = images.Email;
    }
    switch (variant) {
        case buttonVariants.OnlyWithIcon:
        case buttonVariants.OnlyIcon:
        case buttonVariants.OutlinewithIcon:
        case buttonVariants.WithIcon:
            return (
                <Image
                    style={styles(components.Image, variant)}
                    source={iconSource}
                />
            );
        default:
            return null;
    }
};

const label = (variant: string | undefined, children: any | undefined) => {
    switch (variant) {
        case buttonVariants.OnlyIcon:
        case buttonVariants.OnlyWithIcon:
            return null;
        default:
            return (
                <Text style={styles(components.Text, variant)}>{children}</Text>
            );
    }
};

export default Button;
