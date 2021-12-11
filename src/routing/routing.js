import React from 'react'
import { BrowserRouter, Router, Link, Route, Switch, useHistory, Redirect, HashRouter } from 'react-router-dom'
import AttemptAuth from '../auth/AttemptAuth';
// import _Login from '../auth/_Login';
import _MainLayouts from '../layouts/_MainLayouts';
import Dashboard from '../pages/Dashboard';
import DataDosen from '../pages/Dosen/DataDosen';

import Forms from '../pages/Forms'
import Home from '../pages/Home';
import DataMatakuliah from '../pages/MataKuliah/DataMatakuliah';
import InputMatakuliah from '../pages/MataKuliah/InputMatakuliah';
// import MataKuliah from '../pages/MataKuliah/MataKuliah';
import ProsesTopik from '../pages/MataKuliah/Topic/ProsesTopik';
import Topic from '../pages/MataKuliah/Topic/Topic';
import SurveyBahanPenting from '../pages/Survey/SurveyBahanPenting';
import SurveyBahanPokok from '../pages/Survey/SurveyBahanPokok';
import { Cache } from '../services/Cache';
import { ubahText } from '../services/Crypto';
// import InputPengaduanPasien from '../../MPP/InputPengaduanPasien'
import ProtectedRoute from '../services/Route/ProtectedRoute'
import { globalText } from '../services/Text/GlobalText';


function Routing() {
    const c404 = () => {
        return (
            <Redirect to={{ pathname: '/home' }} />
        )
    }


    var ses = Cache.get(globalText.x_auth_resu)
    var us = {}
    if (ses) {
        us = JSON.parse(ses)
    }
    // var cek = JSON.parse()

    if (us.role == 'Admin') {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={AttemptAuth} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/DataDosen" component={DataDosen} />
                    <Route path="*" exact component={() => c404()} />

                </Switch>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={AttemptAuth} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/Topic" component={Topic} />
                    <Route path="/SurveyBahanPenting" component={SurveyBahanPenting} />
                    <Route path="/SurveyBahanPokok" component={SurveyBahanPokok} />
                    <Route path="/InputMatakuliah" component={InputMatakuliah} />
                    <Route path="*" exact component={() => c404()} />

                </Switch>
            </BrowserRouter>
        )
    }

}

export default Routing
