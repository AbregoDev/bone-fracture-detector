import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss'
})
export class UploadImageComponent {
  selectedFile: File | null = null;
  apiResponse:any
  imageUrl: string | ArrayBuffer | null = null;

  // Inject HttpClient to make the HTTP request
  constructor(private http: HttpClient,  private router: Router) {}

  // This method is called when the user selects a file
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();

      reader.onload = () =>
      {
        this.imageUrl = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  // This method is called when the user clicks the upload button
  onUpload() {
    if (this.selectedFile) {
      // Create a FormData object to send the image as multipart/form-data
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      // Send the POST request with the image
      this.http.post('http://localhost:8081/v1/api/images/process', formData).subscribe(
        (response:any) => {
          console.log('Image uploaded successfully', response.message);
          this.apiResponse = response.message
          //this.router.navigate(['/score'], { state: { data: response } });
        },
        (error) => {
          console.error('Error uploading image', error);
        }
      );
    } else {
      console.log('No file selected');
    }
  }
}
