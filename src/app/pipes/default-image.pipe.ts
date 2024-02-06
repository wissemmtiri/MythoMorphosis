import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';
@Pipe({
  name: 'defaultImage',
  pure: true
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string, arg:string=''): string {
    if(arg==="food"){
      return path.trim()? path : environment.foodDefaultImage;
    }
    return path.trim()? path : environment.articleDefaultImage;

  }
}