import React from "react";

import { Icon } from "@iconify/react";

import { Profile } from "./styles";

const PerfilIcon = ({src = "qlementine-icons:user-24", size = 40, alt = 'Foto de Perfil'}) => {
    const imageSrc = src || "qlementine-icons:user-24";
    
    if (src != "qlementine-icons:user-24") {
        return (
            <Profile 
            src={imageSrc}
            $size={size}
            alt={alt}
            />
            );
    }
    else {
    return (
        <Icon 
        icon={imageSrc}
        style={{width: size, height: size, borderRadius: "50%", objectFit: "cover"}}
        alt={alt}
        />
    );
    };
};

export default PerfilIcon;

