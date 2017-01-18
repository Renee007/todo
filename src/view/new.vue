<template>
    <div class="content-wrapper">
        <!-- Content Header -->
        <section class="content-header">
            <h1>新建任务</h1>
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
                      </div>
                            <!-- /.box-header -->
                      <div class="box-body">
                          <textarea type="text" style="width:360px;" placeholder="请输入你要做的事" v-model="addListItem.task_name"></textarea><br/>
                          <input type="text" style="width:270px;" placeholder="请输入计划完成的时间" v-model="addListItem.time"/>
                          <select class="form-control input-sm" style="width:88px;display:inline-block" id="time">
                          <option>mins</option>
                          <option>hours</option>
                          <option>days</option>
                          <option>weeks</option>
                          </select>
                          <br/><br/>
                          <button class="btn btn-primary btn-sm" @click="addItem">确定</button>
                      </div>
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
         this.$nextTick(() => {
            initStyle();
        });
    },
    computed: {
        
    },
    methods: {
        addItem:function(){
             const _self=this;
             _self.addListItem.time_unit=$("#time").val();
             $.ajax({
                    url: api.addTaskList,
                    type: "post",
                    data: _self.addListItem,
                    success: function () {
                        alert("添加成功！");
                     }
                });
           },

    },
    data(){
      return{
        addListItem: {
                task_name: '',
                time: '',
                time_unit:'',
            },
      }
    }
}
</script>
