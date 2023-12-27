const { City } = require("../models/index");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const city = await City.destroy({ where: { id: cityId } });
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async getCityById(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async updateCity({ name, id }) {
    try {
      const city = await City.update({ name }, { where: { id } });
      return city;
    } catch (error) {
      throw { error };
    }
  }
}
module.exports = CityRepository;
