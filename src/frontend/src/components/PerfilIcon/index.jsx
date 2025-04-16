import React from "react";

import { Icon } from "@iconify/react";

import { Profile } from "./styles";

const PerfilIcon = ({src, size = 40, alt = 'Foto de Perfil'}) => { 
    
    if (src) {
        return (
            <Profile 
            src={src}
            $size={size}
            alt={alt}
            />
            );
    }
    else {
    return (
        <Icon 
        icon="qlementine-icons:user-24"
        style={{width: size, height: size, borderRadius: "50%", objectFit: "cover"}}
        alt={alt}
        />
    );
    };
};

export default PerfilIcon;

