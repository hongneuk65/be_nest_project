import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({ message: 'email không được đẻ trống' })
    email: string;

    @IsNotEmpty({ message: 'password không được đẻ trống' })
    password: string;

    @IsOptional()
    name: string;
}
