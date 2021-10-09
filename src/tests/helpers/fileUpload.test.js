import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dyegvlyox', 
    api_key: '648843986624853', 
    api_secret: 'VhaXzENMT1wtFLMje9CbfnwPLTA',
    secure: true
  });

describe('Pruebas en fileUpload', () => {
    
    test('Debe de cargar un archivo y retornar el URL', async() => {
        
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );
        
        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.png', '');

        cloudinary.v2.api.delete_resources(`${imageId}`, {}, ()=>{});

    });
    
    test('Debe de retornar un error', async() => {

        const file = new File([], 'foto.png');
        const url = await fileUpload( file );
        
        expect( url ).toBe( null );
        
    });

});
