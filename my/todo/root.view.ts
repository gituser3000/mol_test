namespace $.$$ {
	export class $my_root extends $.$my_root {
		todo_items: string[]=[];
		addTodoItem(){
			this.todo_items.push(this.name());
			this.root_rows();
		}
		
		@ $mol_mem
		root_rows(){
			return this.todo_items.map(val=>{
				return $mol_row.make({
					sub : ()=> [ val ] 
				})
			})
		}
	}
}
