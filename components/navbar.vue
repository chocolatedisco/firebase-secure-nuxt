<template>
    <b-navbar fixed-top="true" type="is-success">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/mypage">
                <font-awesome-icon icon="address-card"/> Mypage 
            </b-navbar-item>
            <b-navbar-item href="/signup">
                <font-awesome-icon icon="laptop-code"/> signup 
            </b-navbar-item>
            <b-navbar-item href="/login">
                <font-awesome-icon icon="server"/>login  
            </b-navbar-item>
            <!-- <b-navbar-item href="/tmp">
                <img src="@/assets/images/pica.gif">Tmp
            </b-navbar-item> -->
        </template>
    </b-navbar>
</template>