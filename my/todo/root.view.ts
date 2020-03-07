namespace $.$$ {
	export class $my_root extends $.$my_root {
		@ $mol_mem
		todo_items( next = [] as string[] ) { return next }
		@ $mol_mem
		finished_items( next = [] as string[] ) { return next }

		addTodoItem(){
			this.todo_items([...this.todo_items(), this.name()]);
			this.name("");
		}

		getTodoTitle(){
			return this.todo_items().length ? ['Задачи, которые надо выполнить:'] : ['']
		}
		
		todo_item(id:number){
			return this.todo_items()[id];
		}

		finished_item(id:number){
			return this.finished_items()[id];
		}
		
		root_rows(){
			return this.todo_items().map( ( task , index )=> this.Task_row( index ) )
		}
		finished_rows(){
			return this.finished_items().map( ( task , index )=> this.Finished_row( index ) )
		}
		restoreItem(id: number){
			const finished_items= [...this.finished_items()];
			const toRestore = finished_items.splice(id, 1);
			this.finished_items(finished_items);
			this.todo_items([...this.todo_items(), ...toRestore]);
		}

		deleteTodoItem(id: number){
			const items = [...this.todo_items()];
			const deleted = items.splice(id, 1);
			this.finished_items([...this.finished_items(), ...deleted]);
			this.todo_items([...items]);
		}
	}
}
