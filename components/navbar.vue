<template>
    <b-navbar fixed-top="true" type="is-success">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/">
                <font-awesome-icon icon="address-card"/> Profile 
            </b-navbar-item>
            <b-navbar-item href="/">
                <font-awesome-icon icon="laptop-code"/> Skill 
            </b-navbar-item>
            <b-navbar-item href="/">
                <font-awesome-icon icon="server"/>Products 
            </b-navbar-item>
            <!-- <b-navbar-item href="/tmp">
                <img src="@/assets/images/pica.gif">Tmp
            </b-navbar-item> -->
        </template>
    </b-navbar>
</template>