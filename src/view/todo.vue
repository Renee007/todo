<template>
    <div class="content-wrapper">
        <!-- Content Header -->
        <section class="content-header">
            <h1>待完成任务</h1>
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
                                    <li v-for="item in todoList">
                                        <!-- drag handle -->
                                        <span class="handle">
                                          <i class="fa fa-ellipsis-v"></i>
                                          <i class="fa fa-ellipsis-v"></i>
                                        </span>
                                        <!-- checkbox -->
                                        <input type="checkbox" value="" id="checkbox" @click="completeOne(item)"/>
                                        <!-- todo text -->
                                        <span class="text" v-text="item.task_name"></span>
                                        <!-- Emphasis label -->
                                        <small class="label label-danger"><i class="fa fa-clock-o" v-text="item.time+item.time_unit"></i></small>
                                        <!-- General tools such as edit or delete-->
                                        <div class="tools">
                                            <i class="fa fa-edit" @click="update(item)"></i>
                                            <i class="fa fa-trash-o" @click="del(item)"></i>
                                        </div>
                                     </li>

                                    
                                </ul>
                            </div>
                        <!-- /.box-body -->
                         <div  class="box-footer clearfix no-border">
                        <button type="button" class="btn btn-default pull-right" @click="complete"> 确定</button>
                        </div>

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
                    data: "status=todo",
                    success: function (res) {
                       _self.todoList = res.data;
                    }
                });
        },
        del:function(item){
             const _self=this;
             _self.deleteListItem.id = item.id;
             $.ajax({
                    url: api.deleteTaskList,
                    type: "post",
                    data: _self.deleteListItem,
                    success: function () {
                        _self.render();
                      
                    }
                });
        },
         update:function(item){
             const _self=this;
             _self.updateListItem.id = item.id;
             _self.updateListItem.task_name = item.task_name;
             _self.updateListItem.time = item.time;
             _self.updateListItem.time_unit = item.time_unit;


             $.ajax({
                    url: api.updateTaskList,
                    type: "post",
                    data: _self.updateListItem,
                    success: function () {
                        _self.render();
                      
                    }
                });
        },
        completeOne:function(item){
            if($("#checkbox").val){
              this.deleteListItem.push(item.id);
            }
            else{
               for(var i=0;i<deleteListItem.length;i++){
                  if(deleteListItem[i].id==item.id){
                      deleteListItem.splice(i,1);
                      break;
                  }
              }       
           }
        },
        complete:function(){
             const _self=this;
             $.ajax({
                    url: api.completeTaskList,
                    type: "post",
                    data: _self.completeListItem,
                    success: function () {
                        _self.render();
                      
                    }
                });
        },
    },
     data () {
        return {
            todoList:[],
            deleteListItem: {
                id: '',
            },

            updateListItem: {
                id: '',
                task_name: '',
                time: '',
                time_unit: '',
            },
            completeListItem: {
                id: '',
            },
        }
    }
}
   
</script>


