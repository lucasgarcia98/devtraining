import { 
	Controller, 
	Delete, 
	Get,
	Param,
	Patch,
	Post,
	Body,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
	@Get()
	findAll(){
		return `Listagem de todos os Cursos`
	}

	@Get(':id')
	findOne( @Param('id') id: string){
		return `Curso #${id}`
	}

	@Post()
	create(@Body() body){
		return body
	} 

	@Patch(':id')
	update(@Param('id') id: string, @Body() body){
		return `Atualizacao do Curso #${id}`	
	}

	@Delete(':id')
	remove( @Param('id') id: string){
		return `Exclusao do Curso #${id}`
	}
}