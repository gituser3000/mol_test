namespace $.$$ {
	export class $my_root extends $.$my_root {
		
		@ $mol_mem
		activeItems( next = [] as string[] ) { 
			return this.ActiveTasksList().data(next);
		}
		
		@ $mol_mem
		finishedItems( next = [] as string[] ) { 
			return this.FinishedTasksList().data(next);
		}

		addTodoItem(){
			this.activeItems([...this.activeItems(), this.name()]);
			this.name("");
		}

		isAddEnabled(){
			return this.name()
		}

		restoreItem(id: number){
			const finished_items= [...this.finishedItems()];
			const toRestore = finished_items.splice(id, 1);
			this.finishedItems(finished_items);
			this.activeItems([...this.activeItems(), ...toRestore]);
		}

		deleteTodoItem(id: number){
			const items = [...this.activeItems()];
			const deleted = items.splice(id, 1);
			this.finishedItems([...this.finishedItems(), ...deleted]);
			this.activeItems([...items]);
		}
	}
}
