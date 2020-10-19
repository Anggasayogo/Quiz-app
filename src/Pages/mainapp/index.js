import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { History, JadwalSoal, Soal } from '../../assets'
import { Card, Headers } from '../../Components'
import Quiz from '../quiz'
import Jadwal from '../jadwal';
import HistorySoal from '../historysoal';

const MainApp = () => {
    return (
        <BrowserRouter>
          <Headers/>
          <div className="container">
            <div className="row mt-4">
                <div className="col-md-4">
                    <Card image={JadwalSoal} title="List Quest" to="/jadwal"/>
                </div>
                <div className="col-md-4">
                    <Card image={Soal} title="Question" to="/dashboard"/>
                </div>
                <div className="col-md-4">
                    <Card image={History} title="History" to="/historysoal"/>
                </div>
            </div>
            <Switch>
            <Route path="/dashboard" exact>
                <Quiz/>
            </Route>
            <Route path="/jadwal">
                <Jadwal/>
            </Route>
            <Route path="/historysoal">
                <HistorySoal/>
            </Route>
            </Switch>
          </div>
        </BrowserRouter>
    )
}

export default MainApp
