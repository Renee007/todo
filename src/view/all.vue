<template>
    <div class="content-wrapper">
        <!-- Content Header -->
        <section class="content-header">
            <h1>所有任务</h1>
        </section>

        <!-- Main content -->
        <section class="content">
           <div class="row">
               <div class="col-md-12">
                    <!-- TO DO List -->
                  <div class="box box-primary">
                      <div class="box-header">
                        <i class="ion ion-clipboard"></i>
                           <h3 class="box-title">To Do List</h3>
                            <div class="box-tools pull-right">
                                    <ul class="pagination pagination-sm inline">
                                        <li><a href="#">&laquo;</a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">&raquo;</a></li>
                                    </ul>
                            </div>
                            </div>
                            <!-- /.box-header -->
                            <div class="box-body">
                                <ul class="todo-list">
                                    <li v-for="item in allList">
                                        <!-- drag handle -->
                                        <span class="handle">
                                          <i class="fa fa-ellipsis-v"></i>
                                          <i class="fa fa-ellipsis-v"></i>
                                        </span>
                                        <!-- todo text -->
                                        <span class="text" v-text="item.task_name"></span>
                                        <!-- Emphasis label -->
                                        <small class="label label-danger"><i class="fa fa-clock-o" v-text="item.time+item.time_unit"></i></small>
                                        <!-- General tools such as edit or delete-->
                                        <div class="tools">
                                            <i class="fa fa-edit"></i>
                                            <i class="fa fa-trash-o"></i>
                                        </div>
                                     </li>

                                    
                                </ul>
                            </div>
                        <!-- /.box-body -->
                       <router-link :to="{name: 'new'}">
                       <div  class="box-footer clearfix no-border">
                            <button type="button" class="btn btn-default pull-right"><i class="fa fa-plus" href></i> Add item</button>
                            </div>
                        </router-link>
                    </div>
                    <!-- /.box -->
               </div>
           </div>
        </section>
    </div>
</template>

<script> 
import initStyle from '../common/initStyle'
import api from '../common/api'

export default {
    mounted () {
        this.render();
        this.$nextTick(() => {
            initStyle(); 
           
        });
    },
    computed: {
        
    },
    methods: {
        render:function(){
             const _self=this;
             $.ajax({
                    url: api.fetchTaskList,
                    type: "post",
                    //dataType:"json",
                    data: "",
                    //ContentType:"application/json;charset=utf-8",
                    success: function (res) {
                        _self.allList = res.data;
                    }
                });
        }
    },
     data () {
        return {
            allList:[]
        }
    }
}
</script>
