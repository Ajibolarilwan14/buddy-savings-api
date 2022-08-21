import { validate } from "class-validator";
import { BuddySavings } from "../entity/BuddySavings";
import { AppDataSource } from "../data-source";

const buddySavingsRepository = AppDataSource.getRepository(BuddySavings);

export const createSavings = async (details, user) => {
  const buddysavings = new BuddySavings();

  buddysavings.title = details.title;
  buddysavings.no_of_friends = details.no_of_friends;
  buddysavings.do_you_or_your_buddies_have_a_target =
    details.do_you_or_your_buddies_have_a_target;
  buddysavings.target = details.target;
  buddysavings.plan_to_save = details.plan_to_save;
  buddysavings.frequency = details.frequency;
  buddysavings.start_when = details.start_when;
  buddysavings.how_long_do_you_want_to_save_for =
    details.how_long_do_you_want_to_save_for;
  buddysavings.start_date = details.start_date;
  buddysavings.end_date = details.end_date;
  buddysavings.relationship_with_buddies = details.relationship_with_buddies;
  buddysavings.buddies = buddysavings.buddies;
  buddysavings.user = user;

  const errors = await validate(buddysavings);

  if (errors.length > 0) throw new Error();

  await buddySavingsRepository.manager.save(buddysavings);

  return buddysavings;
};

export const editSavings = async (id, details) => {
  const savings = await buddySavingsRepository.findOneBy({
    // @ts-ignore
    userId: id,
  });

  savings.title = details.title;
  savings.no_of_friends = details.no_of_friends;
  savings.do_you_or_your_buddies_have_a_target =
    details.do_you_or_your_buddies_have_a_target;
  savings.frequency = details.frequency;
  savings.plan_to_save = details.plan_to_save;
  savings.relationship_with_buddies = details.relationship_with_buddies;
  savings.target = details.target;
  savings.end_date = details.end_date;
  savings.start_date = details.start_date;
  savings.start_when = details.start_when;
  savings.buddies = details.buddies;

  await buddySavingsRepository.manager.save(savings);

  return savings;
};

export const deleteSavings = async (id, userId) => {
  const savings = await buddySavingsRepository.findOneByOrFail({
    id,
    // @ts-ignore
    userId,
  });

  await buddySavingsRepository.remove(savings);

  return savings;
};

export const fetchASavings = async (id) => {
  const savings = await buddySavingsRepository.findOneByOrFail({
    id,
  });

  return savings;
};

export const approveInvitation = async (user, id) => {
  user.buddy_savingsId = id;

  return user;
}

export const rejectAnInvitation = async (user) => {
  // todo - send an email to the user(buddy savings creator)
}
