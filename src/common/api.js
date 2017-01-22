import {host} from '../../config/host'

export default {
	host: host,
	fetchTaskList:host+'task/info/search',
	deleteTaskList:host+'task/info/delete',
	addTaskList:host+'task/info/add',
	updateTaskList:host+'task/info/batch/update',
}
