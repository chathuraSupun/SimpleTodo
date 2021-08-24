import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", margin: 20 }
});

interface Props {
    children: any;
}

const BufferView = (props: Props) => {
    return <View style={styles.container}>{props.children}</View>;
};

export default BufferView;
