//es un algoritmo criptografico
import md5 from 'md5'

const gravatar =(email)=>{

    const base ="httmps://gavatar.com/avatar"
    const formatteEmail=(email).trim().toLowerCase();
    const hast =md5(formatteEmail, {encoding:"binary"})
    return `${base}${hast}`
    
}