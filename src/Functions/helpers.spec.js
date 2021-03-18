import {
	recursiveCountSubstring,
	countSubstring,
	createGroups,
	createYoutubeLink,
} from "./helpers";

describe("createGroups", () => {
	it("should return an empty array for an empty array", () => {
		expect(createGroups([], 1)).toEqual([]);
	});
	it("should return [[1,2], [3,4]] for createGroups([1,2,3,4],2)", () => {
		expect(createGroups([1, 2, 3, 4], 2)).toEqual([
			[1, 2],
			[3, 4],
		]);
	});
	it("should return [[1],[2], [3],[4]] for createGroups([1,2,3,4],1)", () => {
		expect(createGroups([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
	});
});

describe("createYoutubeLink", () => {
	it("should convert https://www.youtube.com/watch?v=0_55Y3C_kB0&t=241s into https://www.youtube.com/embed/0_55Y3C_kB0", () => {
		expect(
			createYoutubeLink("https://www.youtube.com/watch?v=0_55Y3C_kB0&t=241s")
		).toEqual("https://www.youtube.com/embed/0_55Y3C_kB0");
	});
});

describe("recursiveCountSubstring", () => {
	it("should correctly get the amount of times a substring occurs in an simple array", () => {
		expect(
			recursiveCountSubstring(
				["apple", "apple on a stick", "cheese", "applecheese"],
				"apple"
			)
		).toBe(3);
	});

	it("should work on a nested object", () => {
		expect(
			recursiveCountSubstring(
				{
					apples: ["apple1", "apple2"],
					anApple: "apple",
				},
				"apple"
			)
		).toBe(3);
	});

	it("should work on a deeply nested object", () => {
		expect(
			recursiveCountSubstring(
				{
					apples: [{ anApple: "apple1" }, "apple2", ["apple3"]],
				},
				"apple"
			)
		).toBe(3);
	});
	it("should correctly get the amount of times a substring occurs in an simple object", () => {
		expect(
			recursiveCountSubstring(
				{
					oneapple: "apple",
					alsooneapple: "apple on a stick",
					notapple: "cheese",
					anapple: "applecheese",
				},
				"apple"
			)
		).toBe(3);
	});
});

describe("countSubstrings", () => {
	it("should work on an array of strings and not be case sensitive", () => {
		expect(
			countSubstring(
				[
					"Apple",
					"applebottom jeans",
					"cheese and apples make apples really great",
				],
				"apple"
			)
		).toBe(4);
	});

	it("should work on an object of keys pointing to strings", () => {
		expect(
			countSubstring(
				[
					"apple",
					"applebottom jeans",
					"cheese and apples make apples really great",
				],
				"apple"
			)
		).toBe(4);
	});
});
