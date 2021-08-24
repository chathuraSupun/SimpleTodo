import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";

import Button from "./Button";
import { buttonVariants } from "../../config";
import BufferView from "../../../storybook/BufferView";

storiesOf("Button", module)
    .addDecorator((getStory) => <BufferView>{getStory()}</BufferView>)
    .add("Primay", () => (
        <Button
            onClick={action("clicked-primary")}
            variant={buttonVariants.Primary}
        >
            My Day
        </Button>
    ))
    .add("Secondary", () => (
        <Button
            onClick={action("clicked-secondary")}
            variant={buttonVariants.Secondary}
        >
            Done
        </Button>
    ))
    .add("FacebookWithIcon", () => (
        <Button
            onClick={action("clicked-facebook")}
            variant={buttonVariants.WithIcon}
            icon={"Facebook"}
        >
            Continue with Facebook
        </Button>
    ))
    .add("GoogleWithIcon", () => (
        <Button
            onClick={action("clicked-facebook")}
            variant={buttonVariants.WithIcon}
            icon={"Google"}
        >
            Continue with Google
        </Button>
    ))
    .add("EmailWithIcon", () => (
        <Button
            onClick={action("clicked-email")}
            variant={buttonVariants.OutlinewithIcon}
            icon={"Email"}
        >
            Continue with Email
        </Button>
    ))
    .add("OnlyWithIcon", () => (
        <Button
            onClick={action("clicked-add-new")}
            variant={buttonVariants.OnlyWithIcon}
            icon={"Plus"}
        />
    ))
    .add("Home", () => (
        <Button
            onClick={action("clicked-home")}
            variant={buttonVariants.OnlyIcon}
            icon={"Home"}
        />
    ))
    .add("Settings", () => (
        <Button
            onClick={action("clicked-settings")}
            variant={buttonVariants.OnlyIcon}
            icon={"Settings"}
        />
    ))
    .add("Inactive", () => (
        <Button
            onClick={action("clicked-on-inactive")}
            variant={buttonVariants.InActive}
        >
            Important
        </Button>
    ));
