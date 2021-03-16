import React from 'react';
import {userData} from './store/userData'
import Layout from "./hoc/Layout/Layout";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

export default class App extends React.Component{
    state = {
        data: userData,
        term: '',
        select: 'All'
    }


    searchHandle = (arr, term) => {
        if (term.length === 0){
            return arr;
        }
        return arr.filter((item)=> item.name.toLowerCase().indexOf(term) > -1)
    }

    updateSearch = (term) => {
        return this.setState({
            term
        })
    }
    updateSelect = select => this.setState({
        select
    })
    filterHandler = (value, arr) => {
        switch (value){
            case 'young':
                return arr.filter(item => item.age < 25)
            case 'mature':
                return  arr.filter(item => item.age >= 25 && item.age < 30)
            case 'old':
                return arr.filter(item => item.age >= 30)
            case 'all':
                return arr
            default:
                return arr
        }
    }

    render(){

        const {data, term, select} = this.state;
        const x = this.searchHandle(data,term);

        const visiblePost = this.filterHandler(select, x)
        return(
            <Layout>
                <Header filterHandler={this.updateSelect} updateSearch={this.updateSearch}/>
                <Card data={visiblePost}/>
            </Layout>

        )
    }
}
