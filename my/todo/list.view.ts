namespace $.$$ {
	export class $my_list extends $.$my_list{
		@ $mol_mem
		data( next = [] as string[] ) { 
			return next }

        rows(){
			return this.data().map( ( task , index )=> this.Item_row( index ) )
		}

		label(id: number){
			return this.data()[id];
		}
	}
}