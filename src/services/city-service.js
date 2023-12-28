const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
    } catch (error) {
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(data, cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async getCityById(cityId) {
    try {
      const city = await this.cityRepository.getCityById(cityId);
    } catch (error) {
      throw { error };
    }
  }
}
