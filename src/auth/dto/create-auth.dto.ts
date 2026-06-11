import { comparePassword } from './../../helpers/util';
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({ message: 'email không được đẻ trống' })
    email: string;

    @IsNotEmpty({ message: 'password không được đẻ trống' })
    password: string;

    @IsOptional()
    name: string;
}

export class CodeAuthDto {
    @IsNotEmpty({ message: '_id không được để trống' })
    _id: string;

    @IsNotEmpty({ message: 'code không được đẻ trống' })
    code: string;

}

export class changePasswordAuthDto {
    @IsNotEmpty({ message: 'code không được để trống' })
    code: string;
    
    @IsNotEmpty({ message: 'password không được để trống' })
    password: string;

    @IsNotEmpty({ message: 'comparePassword không được để trống' })
    confirmPassword: string;

    @IsNotEmpty({ message: 'email không được để trống' })
    email: string;

}

