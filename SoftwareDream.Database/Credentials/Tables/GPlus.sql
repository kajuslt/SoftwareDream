CREATE TABLE [Credentials].[GPlus] (
    [Id]               INT           IDENTITY (4000000, 1) NOT NULL,
    [UserId]           INT           NULL,
    [GPlusUserId]      VARCHAR (255) NULL,
    [GPlusAccessToken] VARCHAR (255) NULL,
    [GPlusDisplayName] VARCHAR (100) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    FOREIGN KEY ([UserId]) REFERENCES [Common].[Users] ([Id])
);

