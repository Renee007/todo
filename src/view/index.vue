<template>
    <div>
        <top-bar></top-bar>
        <side-bar></side-bar>
        
        <router-view></router-view>
    </div>
</template>

<script> 

import topBar from '../component/topBar'
import sideBar from '../component/sideBar'

export default {
    components: {
        topBar,
        sideBar
    }
}
</script>
