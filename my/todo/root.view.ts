namespace $.$$ {
	export class $my_root extends $.$my_root {
		@ $mol_mem
		todo_items( next = [] as string[] ) { return next }

		addTodoItem(){
			this.todo_items([...this.todo_items(), this.name()]);
			this.name("");
		}
		todo_item(id:number){
			return this.todo_items()[id];
		}
		
		root_rows(){
			return this.todo_items().map( ( task , index )=> this.Task_row( index ) )
		}

		deleteTodoItem(id: number){
			console.log(id);
			const items = [...this.todo_items()];
			items.splice(id, 1);
			this.todo_items([...items]);
		}
	}
}
