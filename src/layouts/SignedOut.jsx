import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    //2 süslü parantezi şunun için kullandık.Değer verirken script yazarken obje geçiyoruz ya hani
    //Bunu da paraemetre olarak bizden obje marginLeft,marginTop vs virgüller geçebilirz diye obje geçiyoruz.Reacta camelCase , Css'te margin-left

    
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} basic inverted color="blue">Giriş Yap</Button>
                <Button basic inverted color="red" style={{ marginLeft: "0.5em" }}>Kayıt Ol</Button>
            </Menu.Item>

        </div>
    )
}
