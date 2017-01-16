<template>
    <aside class="main-sidebar">
        <section class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel">
                <div class="pull-left image">
                  <img src="/src/component/IMG_3622.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                  <p>Renee Sun</p>
                  <!-- Status -->
                  <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>

            <!-- search form (Optional) -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                  <input type="text" name="q" class="form-control" placeholder="Search...">
                      <span class="input-group-btn">
                        <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search" ></i>
                        </button>
                      </span>
                </div>
            </form>
            <!-- /.search form -->

            <ul class="sidebar-menu">
                <li class="header">导航栏</li>

                <li v-for="(item, index) in menuList"  class="treeview" :class="{'active': currentMenu==item.view}">
                    <router-link :to="{name: item.view}">
                        <i v-bind:class="item.icon"></i> <span v-text="item.name"></span>
                    </router-link>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script>
export default {
    mounted () {
        this.$nextTick(() => {
            $("aside").height($(document).height()-$("header").height());
        });
    },
    computed: {
        currentMenu () {
            var path = this.$route.path.split('/');
            while(!isNaN(Number(path[path.length-1]))){
                path.splice(path.length-1,1);
            }
            return path[path.length-1]
        }
    },
    data () {
        return {
            menuList: [{
                "name": "所有任务",
                "view" : "all",
                "icon" : "fa fa-list-alt",
            }, {
                "name": "待完成任务",
                "view" : "todo",
                "icon" : "fa fa-calendar-times-o",
            }, {
                "name": "已完成任务",
                "view" : "done",
                "icon" : "fa fa-calendar-check-o"
            }, {
                "name": "新建任务",
                "view" : "new",
                "icon" : "fa fa-calendar-plus-o"
            }],
             infor:{
            myPhoto:"http://img3.cache.hxsd.com/hxsdmy/gallery/2012/00/68/41/30/10/24/134021944/8.jpg",
            userName: 'Renee Sun',
            joinTime: ' Member since Nov. 2012',
          }
        }
    }
}
</script>
