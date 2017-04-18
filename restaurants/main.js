
function Chef(newID, newName) {
    this.id = newID;
    this.name = newName;
    this.orderGroups = [];
    this.menu = [];
    this.servers = [];
    this.init = function(){
        var newServer = new Server(1,"Joshua");
        this.servers.push(newServer);
        newServer.init(this);
    };
    this.complain = function(){
        console.log(`I, ${this.name}, am mad as hell, and I'm not going to cook this shit anymore`);
    };
}

function Server(newID, newName) {
    this.id = newID;
    this.name = newName;
    this.tables = [];
    this.order_queue = [];
    this.chef = null;
    this.init = function(parentChef){
        this.chef = parentChef;
        var newTable = new Table(1,'southwest corner');
        this.tables.push(newTable);
        newTable.init(this);
    };
}

function Table(newID, newLocation) {
    this.id = newID;
    this.customers = [];
    this.location = newLocation;
    this.server = null;
    this.init = function(parentServer){
        this.server = parentServer;
        var newCustomer = new Customer('Erik', 1);
        this.customers.push(newCustomer);
        newCustomer.init(this);
    };
}

function Customer(newName, seatNumber) {
    this.name = newName;
    this.people = [];
    this.seat = seatNumber;
    this.order = [];
    this.table = null;
    this.init = function(parentTable){
        this.table = parentTable;
        console.log('DONE');
    };
}

var headChef = new Chef(1, "Nancy");
headChef.init();