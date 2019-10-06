# Example for Swagger Generated REST Api and DTOs for use with Angular App
This example is using the package **_ng-swagger-gen_**, you can find it here: https://www.npmjs.com/package/ng-swagger-gen.

Having created your Swagger api-doc.json you can either put the file in the root of the app or point to the URL of your Swagger documentation

The following command will create the Models and API-Services:
```bash
./node_modules/.bin/ng-swagger-gen -i <path/to/swagger.json>
```

For this example you can use the existing Swagger api-doc in the root folder. 
**Git checkout and create your models and api-services like this:***
```bash
./node_modules/.bin/ng-swagger-gen -i swagger-api-docs.json
```

If you want to further specify Swagger configuration execute this command:
```bash
./node_modules/.bin/ng-swagger-gen --gen-config
```
