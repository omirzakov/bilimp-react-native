import React from "react";
import { WebView } from 'react-native-webview';

const Courses = () => {


    return (
        <WebView source={{uri: 'https://stepik.org/catalog?utm_source=stepik_landing_welcome&utm_medium=stepik_courses&utm_campaign=catalog_2021_11_01&_ga=2.181560935.1725308428.1639898860-1350209924.1639898860'}} />
    )
}
export default Courses;