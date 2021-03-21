import { Entity,  Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('pedidos')
class Pedidos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    valor: string;
}

export default Pedidos;