import { Entity, PrimaryColumn , Column} from 'typeorm'

@Entity('pedidos')
class Pedidos {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    formatted_value: string;

    @Column()
    status: string;

    @Column()
    add_time: string;
    
    @Column()
    update_time: string;
}

export default Pedidos;