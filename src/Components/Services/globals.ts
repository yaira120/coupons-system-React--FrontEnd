class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        company: "http://localhost:8080/api/company",
        homePage:"http://localhost:8080/api/home",
        admin:"http://localhost:8080/api/admin",
        customer:"http://localhost:8080/api/customers"
      
          }
}

class ProductionGlobals extends Globals{
    public urls = {
       
         company: "www.aws.com/Website/welcome",
         homePage:"http://localhost:8080/api/home",
         admin:"www.aws.com/mkk",
        customer:"www.aws.com/mkk"



    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;