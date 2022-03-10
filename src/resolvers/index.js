const createJob = require("./job/createJob");
const jobs = require("./job/jobs");
const job = require("./job/job");
const updateJob = require("./job/updateJob");
const deleteJob = require("./job/deleteJob");

const signupStudent = require("./signupStudent");
const loginStudent = require("./loginStudent");
const signupStaff = require("./signupStaff");
const loginStaff = require("./loginStaff");

const dashboard = require("./dashboard");
const createItem = require("./createItem");

const createForumPost = require("./forumPost/createForumPost");

const resolvers = {
  Query: { jobs, job, dashboard },
  Mutation: {
    createJob,
    signupStudent,
    createItem,
    updateJob,
    deleteJob,
    signupStaff,
    loginStudent,
    loginStaff,
    createForumPost,
  },
};

module.exports = resolvers;
