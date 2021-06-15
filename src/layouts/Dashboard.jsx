import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>

                    <GridColumn width={12}>
                        <Route path="/" component={ProductList}/>

                       
                    </GridColumn>

                </GridRow>

             </Grid>
        </div>
    )
}
