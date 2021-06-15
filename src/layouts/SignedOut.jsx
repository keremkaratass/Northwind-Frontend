import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    //2 süslü parantezi şunun için kullandık.Değer verirken script yazarken obje geçiyoruz ya hani
    //Bunu da paraemetre olarak bizden obje marginLeft,marginTop vs virgüller geçebilirz diye obje geçiyoruz.Reacta camelCase , Css'te margin-left

    // <Button inverted color="red" style={{ marginLeft: "0.5em" }}>Kayıt Ol</Button>
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} inverted color="blue">Giriş Yap</Button>
                <Button inverted color="red" style={{ marginLeft: "0.5em" }}>Kayıt Ol</Button>
            </Menu.Item>

        </div>
    )
}
