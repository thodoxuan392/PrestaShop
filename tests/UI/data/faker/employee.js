import Languages from '@data/demo/languages';
import Profiles from '@data/demo/profiles';

const {faker} = require('@faker-js/faker');
const {Pages} = require('@data/demo/pages');

const profileNames = Object.values(Profiles).map((profile) => profile.name);
const languagesNames = Object.values(Languages).map((lang) => lang.name);

/**
 * Create new employee to use on creation form on employee page on BO
 * @class
 */
class EmployeeData {
  /**
   * Constructor for class EmployeeData
   * @param employeeToCreate {Object} Could be used to force the value of some members
   */
  constructor(employeeToCreate = {}) {
    /** @type {string} Employee fistname */
    this.firstName = employeeToCreate.firstName || faker.name.firstName();

    /** @type {string} Employee lastname */
    this.lastName = employeeToCreate.lastName || faker.name.lastName();

    /** @type {string} Email of the employee */
    this.email = employeeToCreate.email || faker.internet.email(this.firstName, this.lastName, 'prestashop.com');

    /** @type {string} Password for the employee account */
    this.password = employeeToCreate.password || 'prestashop_demo';

    /** @type {string} Default page where employee should access after login */
    this.defaultPage = employeeToCreate.defaultPage || faker.helpers.arrayElement(Pages);

    /** @type {string} Default BO language for the employee */
    this.language = employeeToCreate.language
      || faker.helpers.arrayElement(languagesNames.slice(0, 2));

    /** @type {string} Status of the employee */
    this.active = employeeToCreate.active === undefined ? true : employeeToCreate.active;

    /** @type {string} Permission profile to set on the employee */
    this.permissionProfile = employeeToCreate.permissionProfile || faker.helpers.arrayElement(profileNames);

    /** @type {string|null} Path of the avatar of the employee */
    this.avatarFile = employeeToCreate.avatarFile || null;

    /** @type {boolean} Enable Gravatar */
    this.enableGravatar = false;
  }
}

module.exports = EmployeeData;
