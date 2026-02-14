import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Nat "mo:core/Nat";
import Order "mo:core/Order";

actor {
  type SectorId = Nat;
  type ProductId = Nat;

  type Sector = {
    id : SectorId;
    name : Text;
    description : Text;
  };

  type Product = {
    id : ProductId;
    name : Text;
    price : Nat;
    sector : SectorId;
    advantages : [Text];
    disadvantages : [Text];
    description : Text;
  };

  module Product {
    public func compare(a : Product, b : Product) : Order.Order {
      Nat.compare(a.id, b.id);
    };

    public func compareByPrice(a : Product, b : Product) : Order.Order {
      Nat.compare(a.price, b.price);
    };
  };

  // Persistent state
  let sectors = Map.empty<Nat, Sector>();
  let products = Map.empty<Nat, Product>();

  // Seed data
  let initialSectors = [
    {
      id = 1;
      name = "Electronics";
      description = "Devices and gadgets";
    },
    {
      id = 2;
      name = "Home Appliances";
      description = "Kitchen and home equipment";
    },
    {
      id = 3;
      name = "Sports";
      description = "Sporting goods and equipment";
    },
  ];

  let initialProducts = [
    {
      id = 1;
      name = "Smartphone";
      price = 700;
      sector = 1;
      advantages = ["Portable", "Multi-functional"];
      disadvantages = ["Expensive", "Fragile"];
      description = "Latest model smartphone";
    },
    {
      id = 2;
      name = "Blender";
      price = 100;
      sector = 2;
      advantages = ["Easy to use", "Compact"];
      disadvantages = ["Noisy", "Limited capacity"];
      description = "Powerful kitchen blender";
    },
    {
      id = 3;
      name = "Tennis Racket";
      price = 150;
      sector = 3;
      advantages = ["Lightweight", "Durable"];
      disadvantages = ["Expensive", "Needs practice"];
      description = "Professional tennis racket";
    },
  ];

  // Initialize persistent state with seed data
  for (sector in initialSectors.values()) {
    sectors.add(sector.id, sector);
  };

  for (product in initialProducts.values()) {
    products.add(product.id, product);
  };

  // Public queries
  public query ({ caller }) func getSectors() : async [Sector] {
    sectors.values().toArray();
  };

  public query ({ caller }) func getProductsBySector(sectorId : SectorId) : async [Product] {
    products.values().toArray().filter(func(p) { p.sector == sectorId });
  };

  public query ({ caller }) func getProductById(productId : ProductId) : async ?Product {
    products.get(productId);
  };

  public query ({ caller }) func searchProductsByName(searchTerm : Text) : async [Product] {
    let lowerSearch = searchTerm.toLower();
    products.values().toArray().filter(
      func(p) { p.name.toLower().contains(#text lowerSearch) }
    );
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductsByPriceRange(minPrice : Nat, maxPrice : Nat) : async [Product] {
    products.values().toArray().filter(func(p) { p.price >= minPrice and p.price <= maxPrice });
  };
};
